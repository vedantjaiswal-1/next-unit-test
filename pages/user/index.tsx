import { NextPage } from 'next';
import Head from 'next/head';
import { Card } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import User from '../user/User.json';

const UserPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users</title>
        <meta name='description' content='Users' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h3>User List</h3>

        <div>
          {User.map((item: any) => (
            <Card className='mb-2' key={item.id}>
              <Card.Body>
                <p>
                  Name: {item.first_name} {item.last_name}
                </p>
                <p>Team: {item.team}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserPage;
