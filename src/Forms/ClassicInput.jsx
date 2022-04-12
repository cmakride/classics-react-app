const ClassicInput = ({form, handleChange}) => {
  return ( 
    <>
    <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="category">Category</label>
      <input
        value={form.category ? form.category : ''} onChange={handleChange} id="category"
        required name="category" type="text" placeholder="Category" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      <label htmlFor="image">Image</label>
      <input
        value={form.image ? form.image : ''} onChange={handleChange} id="age"
        required name="image" type="text" placeholder="Image" autoComplete="off"
      />
    </>
   );
}
 
export default ClassicInput;