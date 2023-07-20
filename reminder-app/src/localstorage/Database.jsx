import React from "react";

export function addReminder(reminder) { 
    let reminderList = JSON.parse(localStorage.getItem("reminderList")) || [];
    reminderList.push(reminder);
    localStorage.setItem("reminderList", JSON.stringify(reminderList));
    console.log(reminderList);
}

export function getReminder(){
    const datas =  JSON.parse(localStorage.getItem("reminderList")) || [];
    return datas.map((item, index) => {
        console.log(item , index)
    })
}

export function updateReminder(uid, updatedObj){
    localStorage.getItem("reminderList").map((item, index) => {
        if(item.id === uid){
            data = localStorage.getItem("reminderList")[index]
            localStorage.setItem("reminderList", JSON.stringify( {...data, ...updatedObj}));
        }
    })

    console.log(localStorage.getItem("reminderList"))
}

export function clearStorage() {
    localStorage.clear();
}