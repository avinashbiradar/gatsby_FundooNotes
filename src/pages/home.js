import React from "react"
import { Router } from "@reach/router"
import { render } from "react-dom"
import RegisterIn from "../pages/register"
import  SignIn from "../pages/login"
import Forgot from "../pages/forgot"
import ResetIn from  "../pages/reset"
import SideBarIn from "../pages/sidebar"
import NavbarIn from "../pages/navbar"
import AddNoteIn from "../pages/addnote"
import DisplayIconsIn from "../pages/displayicons"
import DisplayNotesIn from "../pages/displaynotes"
import NotesIn from "../pages/notes"
import TrashIn from "../pages/trash"
import ArchiveIn from "../pages/archive"
export default function Home() {
  render(
    <Router>
      <SignIn path="login" />
      <RegisterIn path="register" />
      <Forgot path="forgot" />
      <ResetIn path="resetpassword/:id"/>
      <SideBarIn path="sidebar" />
      <NavbarIn path="navbar/"/>
      <AddNoteIn path="addnote"/>
      <DisplayIconsIn path="displayicons"/>
      <DisplayNotesIn path="displaynotes"/>
      <NotesIn path="notes"/>
      <TrashIn path="trash"/>
      <ArchiveIn path="archive"/>
    </Router>
  )
  
}