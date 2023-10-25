import Details from './Screen/Details';
import Data from './config/Data';

const App = ()=> {
  return(
    <>
    <Details recipe = {Data[0].recipes[5]}></Details>
    </>
  )
}
export default App;