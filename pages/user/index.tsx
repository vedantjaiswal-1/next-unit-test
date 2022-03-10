import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
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

        <div className={styles.grid}>
          {User.map((item: any) => {
            return (
              <>
                <a href='#' className={styles.card}>
                  <p>
                    Name: {item.first_name} {item.last_name}
                  </p>
                  <p>Team: {item.team}</p>
                </a>
              </>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default UserPage;
