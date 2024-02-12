import styles from "./page.module.css";
import Image from "next/image";
import recepiPhoto from "../../public/localhost_3000_project1.png";

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
          description={"02/08/2024"}
          image={recepiPhoto}
          link={"/project1"}
        />
        <Card
          title={"Form Page"}
          description={"18/01/2023"}
          image={"/localhost_3000_project8.png"}
          link={"/project8"}
        />
         <Card
          title={"Landing Page"}
          description={"18/01/2023"}
          image={"/localhost_3000_project11.png"}
          link={"/project11"}
        />
        <Card
          title={"Travel Book"}
          description={"18/01/2023"}
          image={"/localhost_3000_project2.png"}
          link={"/project2"}
        />
         <Card
          title={"Advice Generator"}
          description={"18/01/2023"}
          image={"/localhost_3000_project12.png"}
          link={"/project12"}
        />
        <Card
          title={"Bank Graph"}
          description={"18/01/2023"}
          image={"/localhost_3000_project10.png"}
          link={"/project10"}
        />
        <Card
          title={"Tips Calculator"}
          description={"15/03/2023"}
          image={"/localhost_3000_project6.png"}
          link={"/project6"}
        />
        <Card
          title={"Ecommerce"}
          description={"15/03/2023"}
          image={"/localhost_3000_project7.png"}
          link={"/project7"}
        />
        <Card
          title={"TimeTrack"}
          description={"09/03/2023"}
          image={"/localhost_3000_project3.png"}
          link={"/project3"}
        />
        <Card
          title={"Portfolio"}
          description={"13/03/2023"}
          image={"/localhost_3000_project4.png"}
          link={"/project4"}
        />
        <Card
          title={"Calculator"}
          description={"13/03/2023"}
          image={"/localhost_3000_project5.png"}
          link={"/project5"}
        />
        <Card
          title={"Tenzies"}
          description={"13/03/2023"}
          image={"/localhost_3000_project9.png"}
          link={"/project9"}
        />
      </section>
    </main>
  );
}
