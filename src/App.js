import React from "react";
import DropDownImage from './dropDownImage';
import DropDownContent from './dropDownContent';
import DropDownLikes from './dropDownLikes';
import DropDownButton from './dropDownButton';


class DropDown extends React.Component {

    render() {
        return (
            <div style={{margin: '20px'}}>
                <DropDownImage imageSource="https://www.discoveryeducation.com/400/400"/>
                <DropDownContent content ="This is from the Discovery..."/>
                <DropDownLikes numberOfLikes={50}/>

                <DropDownButton category Image="http://placekitten.com/100/100" categoryTitle="Cats"/>
                <DropDownButton category Image="http://placekitten.com/100/100" categoryTitle="Dogs"/>
            </div>

        )
    }
}