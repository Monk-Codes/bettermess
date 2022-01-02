import React,{useState} from 'react'
import "./Style.css"
import Menu from './MenuApi'
import MenuCard from './MenuCard'

const Food = () => {
    const [menuData, setMenuData] = useState(Menu)
    return (
        <>
        <MenuCard/>
        </>
    )
}

export default Food
