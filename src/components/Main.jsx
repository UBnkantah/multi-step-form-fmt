import {useContext} from 'react'
import DataContext from '../context/DataContext'
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOn from './AddOn';
import Summary from './Summary';

const Main = () => {

    const {page} = useContext(DataContext);

    const display = {
        0: <PersonalInfo />,
        1: <SelectPlan />,
        2: <AddOn />,
        3: <Summary />
    }


  return (
    <div>
        {display[page]}
    </div>
  )
}

export default Main