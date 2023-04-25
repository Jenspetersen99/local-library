const genre_controller = require("../controllers/genreController");
test("genre_create_post is an object", ()=> {
    expect(typeof genre_controller.genre_create_post).toBe('object')
})
test("genre_create_post cotains a sanitize function", ()=>{
    const func = genre_controller.genre_create_post[0]
    expect(typeof func).toBe('function')
})
test("genre_create_post contains a function", ()=> {
    const func = genre_controller.genre_create_post[1]
    expect(typeof func).toBe('function')
})

test("genre_delete_post is a function", ()=>{
    expect(typeof genre_controller.genre_delete_post).toBe('function')
})