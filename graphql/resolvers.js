const Movie = require("../model/movie")

module.exports = {
    Query: {
        async movie(_, { ID }) {
            return await Movie.findById(ID)
        },
        async getMovie(_, { amount }) {
            return await Movie.find().sort({year:-1}).limit(amount)
        }
    },
    Mutation: {
        async createMovie(_, { movieInput: { title, year, description } }) {
            const createMovie = new Movie({
                title: title,
                year: year,
                description:description
            })

            const res = await createMovie.save()

            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteMovie(_, { ID }) {
            const wasDeleted = (await Movie.deleteOne({ _id: ID })).deletedCount;
            return wasDeleted;
        },
        async editMovie(_, { ID, movieInput: { title, year, description } }) {
            const wasEdited = (await Movie.updateOne({ _id: ID }, {
                title: title,
                year: year,
                description: description
            })).modifiedCount;

            return wasEdited;
        }
    }
}