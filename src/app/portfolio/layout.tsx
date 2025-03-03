import styles from "./page.module.css";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <h1 className={styles.mainTitle}>Our Works</h1>
        {children}
      </div>
    </>
  );
};

export default Layout;
