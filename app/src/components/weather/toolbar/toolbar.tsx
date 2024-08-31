import { OptionType, selectDateHandlerType } from "../_types";
import { SelectDate } from "./components/SelectDay";



export function Toolbar(props: { selectDateHandler: selectDateHandlerType}) {
       return (
              <nav className="h-16 border-b p-3">
                    <SelectDate selectDateHandler={props.selectDateHandler} />
              </nav>
       )
}