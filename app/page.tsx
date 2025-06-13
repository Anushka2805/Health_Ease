// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/mainpage');
}