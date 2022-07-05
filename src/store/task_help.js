export default class Task {
	constructor(
		title,
          completed,
          editing,
		  user = null,
		  id = null

	) {
		this.title = title,
		this.completed = completed,
		this.editing = editing,
		this.user = user
		this.id = id
	}
  }