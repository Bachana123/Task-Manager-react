import { useState } from 'react'

const AddTask = ({addTask}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const resetInputs = () => {
    setText('');
    setDay('');
    setReminder(false);
  }

  const submitForm = (e) => {
    e.preventDefault();
    
    if (!text) {
      alert('please add task text');
      return
    }

    addTask({text, day, reminder}, e)
    resetInputs()
  }

  return (
    <form className="add-form" onSubmit={(e) => submitForm(e)}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input className="btn btn-block" type="submit" value="save task"/>      
    </form>
  )
}

export default AddTask;