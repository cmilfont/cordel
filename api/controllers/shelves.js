import elasticsearch from 'elasticsearch';

export class Shelves {

    search(req, res) {
      this.client
          .search({
            index: "paragraph",
            q: req.query.query
          })
          .then( function(body) {
            res.send(body.hits.hits);
          });
    }

    constructor(app, models) {

        this.client = new elasticsearch.Client({
          host: 'localhost:9200',
          log: 'trace'
        });

        this.app = app;
        this.models = models;

        app.get('/search', this.search.bind(this) );

    }
}
