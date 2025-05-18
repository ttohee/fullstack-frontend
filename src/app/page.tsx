import { login } from '@/api/auth';
import Clicker from './Clicker';

export default async function Home() {
  const response = await login('asdf', 'asdf').catch(console.error);
  console.log(response);

  return (
    <>
      <Clicker />
    </>
  );
}
