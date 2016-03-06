var recordStore = new FS.Store.FileSystem("records", {
	path : './uploads'
})

Records = new FS.Collection("records", {
	stores : [recordStore]
})
