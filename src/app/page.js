import styles from "./page.module.css";
import Image from "next/image";

function Card({ title, description, image, link }) {
  return (
    <a href={link} style={styles.a}>
      <div style={{ height: "300px", width: "300px" }} className={styles.card}>
        <Image
          className={styles.img}
          src={image}
          alt="Omelette Image"
          width={300}
          height={300}
        />
        <div className={styles.div}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <h1>Practice</h1>
      </header>
      {/* Create a component for displaying each design */}
      <section className={styles.section}>
        <Card
          title={"Recipe"}
          description={"Easy"}
          image={"/localhost_3000_project1.png"}
          link={"/project1"}
        />
        <Card
          title={"Recipe"}
          description={"Easy"}
          image={"/localhost_3000_project1.png"}
          link={"/project1"}
        />
        <Card
          title={"Recipe"}
          description={"Easy"}
          image={"/localhost_3000_project1.png"}
          link={"/project1"}
        />
      </section>
    </main>
  );
}
