'use strict';
import generateHeader from './generateHeader.js'
import generateFooter from './generateFooter.js'
import generateCatalog from './generateCatalog.js'
import generateGoodsPage from './generateGoodsPage.js'
import generateCartPage from './generateCartPage.js'
import generateItemPage from './generateItemPage.js'
import './storage.js'


generateHeader();
generateFooter();
generateCatalog();
generateGoodsPage();
generateItemPage();
generateCartPage();