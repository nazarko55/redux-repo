import React from 'react';
import TasksList from './TasksList'

const TodoList = () =>

  <div className="main-element-block">

    <div className="one-element-block">
      <TasksList />
    </div>

    <div className="two-element-block">
      <TasksList />
    </div>


    <div className="three-element-block">
      <TasksList />
    </div>

  </div>

/* using three list(demonstrative) working with adaptive layout @mediascreen see in index.scss
I think that I did not fully understand the task,
 maybe you need to implement todoList and maybe 
 shoppping cart did not understand to the end )
*/


export default TodoList