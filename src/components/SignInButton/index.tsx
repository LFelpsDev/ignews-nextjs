import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client'


import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();


  console.log(session)


  return session ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sign in With Github
    </button>
  )
}