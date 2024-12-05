import '../App.css';
import '../index.css'
import Feature from './layout/Feature';
import Contents from './layout/Contents';
import Mention from './layout/Mention';
export default function Main() {
  return (
    <main>
      <Feature/>
      <Mention/>
      <Contents/>
    </main>
  )
}