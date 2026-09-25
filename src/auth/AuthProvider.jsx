import { useEffect, useState } from 'react';
import { AuthContext } from './context';
import { openedFromResetLink, supabase } from '../lib/supabase';

export function AuthProvider({ children }) {
  // undefined = still checking the stored session; null = signed out.
  const [session, setSession] = useState(supabase ? undefined : null);
  const [profileRow, setProfileRow] = useState(null);
  const [recovering, setRecovering] = useState(openedFromResetLink);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((event, next) => {
      setSession(next);
      if (event === 'PASSWORD_RECOVERY') setRecovering(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const userId = session?.user?.id;

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    supabase
      .from('profiles')
      .select('id, full_name, phone, is_admin')
      .eq('id', userId)
      .maybeSingle()
      .then(({ data }) => !cancelled && setProfileRow(data ?? { id: userId }));
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const value = {
    session,
    user: session?.user ?? null,
    loading: session === undefined,
    profile: profileRow && profileRow.id === userId ? profileRow : null,
    recovering,
    clearRecovering: () => setRecovering(false),
    signOut: () => supabase?.auth.signOut(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
