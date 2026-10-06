import css from './FilterLayout.module.css';
import Sidebar from './@sidebar/default';

type Props = {
  children: React.ReactNode;
};

export default function FilterLayout({ children }: Props) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <Sidebar />
      </aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
