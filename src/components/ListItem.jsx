export default function ListItem({itemData, deleteTodo}) {
  return (
<li>
<span>{itemData.content}</span>
<button className="delete" onClick={() => deleteTodo(itemData.id)}>X</button>
</li> 
)
}
