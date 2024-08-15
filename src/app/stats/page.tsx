'use client';

import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

interface CommandUsage {
  user_id: string;
  command_name: string;
}

interface StatsData {
  totalUsers: number;
  userUsage: { [key: string]: number };
  commandUsage: { [key: string]: number };
}

const fetchStats = async (): Promise<StatsData> => {
  try {
    const { data, error } = await supabase
      .from<CommandUsage>('command_usage')
      .select('user_id, command_name');

    if (error) throw new Error(error.message);

    const users = new Set<string>();
    const userUsage: { [key: string]: number } = {};
    const commandUsage: { [key: string]: number } = {};

    data?.forEach(({ user_id, command_name }) => {
      users.add(user_id);
      userUsage[user_id] = (userUsage[user_id] || 0) + 1;
      commandUsage[command_name] = (commandUsage[command_name] || 0) + 1;
    });

    return {
      totalUsers: users.size,
      userUsage,
      commandUsage,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error; // Re-lanzar el error para que el componente pueda manejarlo
  }
};

const StatsPage = () => {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        setError('Error fetching stats. Please check the console.');
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) return <p className="text-center text-lg text-muted">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-background-dark">
      <div className="p-6 max-w-4xl mx-auto bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-heading text-center mb-6">Estadísticas de Uso de Comandos</h1>
        <div className="bg-card border border-border rounded-lg p-4 mb-6 shadow-lg">
          <h2 className="text-xl font-heading">Usuarios Totales que Usan el Bot:</h2>
          <p className="text-lg">{stats?.totalUsers}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 mb-6 shadow-lg">
          <h3 className="text-lg font-heading">Uso de Comandos por Usuario:</h3>
          <ul className="list-disc pl-5">
            {Object.entries(stats?.userUsage || {}).map(([userId, count]) => (
              <li key={userId} className="mb-2">
                ID de usuario: {userId} - Veces totales que a usado comandos: {count}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 mb-6 shadow-lg">
          <h3 className="text-lg font-heading">Uso de Comandos:</h3>
          <ul className="list-disc pl-5">
            {Object.entries(stats?.commandUsage || {}).map(([commandName, count]) => (
              <li key={commandName} className="mb-2">
                {commandName} - {count} usos
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
