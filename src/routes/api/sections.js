export async function get() {
    const res = await fetch('http://localhost:1337/api/sections');
    const data = await res.json();

    return { body: data.data.map((_) => { return _.attributes }) };
}