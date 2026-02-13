// export function TabButton(props) {
//     return (<li> 
//         <button>
//             {props.children}
//         </button>
//      </li>

//     );
// }
// OR 
export function TabButton({children,onSelect,isSelected}) {
    console.log('TabButton Component Executing');
    return (
    <li> 
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>
            {children}
        </button>
     </li>

    );
}