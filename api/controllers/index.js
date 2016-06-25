'use strict';

import { Users } from "./users.js";
import { Shelves } from "./shelves.js";

export class Controllers {

  constructor(app, models, client) {

      app.get('/', function(req, res) {
        res.render('index', { user : req.user });
      });
      new Users(app, models);
      new Shelves(app, models);

  }

}
