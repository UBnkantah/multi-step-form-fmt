import {createContext, useState} from "react"

const DataContext = createContext(null)




export const DataProvider = ({children}) => {

    const [page, setPage] = useState(0);

    const [data, setData] = useState({
      name: "",
      email: "",
      phone: "",
      plan: "",
      pickadd: [],
    });

    const handleChange = (e) => {
      const type = e.target.type;

      const name = e.target.name;

      const value = type === "checkbox" ? e.target.checked : e.target.value;

      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const prevHide = page === 0 && "hidden";

    const nextHide = page === 3 && "hidden";

    const submitHide =
      page !== 3 && "hidden";

    return(
        <DataContext.Provider value={{data, page, setPage, setData, handleChange, prevHide, nextHide, submitHide}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;