var store = require('store')
store.set('user', { name:'Marcus' })
store.get('user').name == 'Marcus'