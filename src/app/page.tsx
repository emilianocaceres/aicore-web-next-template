import Image from 'next/image';
import Hero from 'public/hero.png';

import { Button } from '@/components/button/Button';

import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Better design for your digital products/</h1>

                <p className={styles.description}>
                    Turning your Idea into Reality. We bring together the teams from the global tech
                    industry.
                </p>

                <Button href={'/portfolio'} text={'See Our Works'} />
            </div>

            <div className={styles.item}>
                <Image alt={''} className={styles.img} src={Hero} />
            </div>
        </main>
    );
}
