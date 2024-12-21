import React, { useContext, useState } from "react";
import EditTeacherForm from './EditTeacherForm'
import TeacherTable from "./TeacherTable";
import TeacherForm from "./TeacherForm";
import './Teacher.css'
import { AuthTeacher } from "../../../store/TeacherStore";

const Teacher = ({teachers}) => {

  const {deleteTeacher, updateTeacher} = useContext(AuthTeacher)

  const [isEditing, setIsEditing] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);

  const handleUpdate = (index) => {
    setCurrentTeacher(teachers[index]);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      deleteTeacher(id);
    }
  };

  const handleSave = (id, updatedTeacher) => {
    updateTeacher(id, updatedTeacher);
    setIsEditing(false);
  };

  return (
    <div className="teacher-management">
      <h1>Teacher Management</h1>
      {isEditing ? (
        <EditTeacherForm teacher={currentTeacher} onSave={handleSave} onCancel={() => setIsEditing(false)} />
      ) : (
        <TeacherForm />
      )}
      <TeacherTable teachers={teachers} onUpdate={handleUpdate} onDelete={handleDelete} />

    </div>
  );
}

export default Teacher
