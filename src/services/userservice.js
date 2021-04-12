
import axios from "axios";

const baseUrl = `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`;


export default function registration(data) {
        console.log("This is the registration part", data);
        let data1 = axios.post(baseUrl, data);
        return data1;
};

export function login(data) {
    console.log("This is the Sign in part", data);
    let data2 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, data);
    return data2;
}

export function forgotPass(data) {
        console.log("This is forgot password part", data);
        let data3 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset`, data);
        return data3;
   
};

export function resetPass(data,id) {
        console.log("This is reset password part", data,id);
        let data3 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password`,data,{headers:{'Authorization':id}});
        return data3;   
};

export function addNote(data){
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})

}

export function getNotes(){
    return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})
  };

export function updateNotes(formData)  {
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes`,formData,{headers:{'Authorization':localStorage.getItem('token')}})
}

export function  deleteNotes(formData){
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes`,formData,{headers:{'Authorization':localStorage.getItem('token')}})
}

export function getTrashNotes(){
    return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})
  };
export function ArchiveNotes(data){
    return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})
  };
export function getArchiveNotes(){
    return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})
  };

export function  changeColor(data){
    return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})
  };