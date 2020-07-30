const todosUrl = "http://localhost:3000/todos/"

export function patchTodo(todo){
    fetch(todosUrl + todo.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ todo })
      })
}

export function postTodo(todo, user){
  fetch(todosUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({ todo: {...todo, user_id: user.id} })
  })
}

export function deleteTodo(id){
  fetch(todosUrl + id, { method: "DELETE" } )
}