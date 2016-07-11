import {NavController, ModalController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {HELPER_ARTICLES} from "../../data/HELPER_ARTICLES";
import {TODO_LISTS} from "../../data/TODO_LISTS";
import {TodoModal} from "../../components/TodoModal";
import {HtmlModal} from "../../components/HtmlModal";

@Component({
  templateUrl: 'build/pages/day/day1.html'
})
export class Day {
  basicView:string = "articleView";
  articles = HELPER_ARTICLES['zh-cn'];

  constructor(public nav:NavController, private modalCtrl:ModalController, public params:NavParams) {
    this.nav = nav;
    this.modalCtrl = modalCtrl;
    this.params = params;
  }

  ionViewLoaded() {

  }

  ionViewWillLeave() {

  }

  presentTodoModal(params) {
    var todoLists = TODO_LISTS['zh-cn'][params.domain];
    var todoModal = this.modalCtrl.create(TodoModal, {todoLists: todoLists});
    todoModal.present();
  }

  presentHtmlModal(params) {
    var articleModal, slug, modalParams;

    if (params.type === 'desc') {
      slug = 'assets/desc/html/' + params.slug + '.html';
      modalParams = {slug: slug, pageTitle: '简介'};
    } else if (params.domain) {
      slug = 'assets/growth/' + params.domain + '/' + params.slug + '.html';
      modalParams = {slug: slug};
    } else {
      slug = 'assets/article/' + params.slug + '.html';
      modalParams = {slug: slug, pageTitle: '文章'};
    }

    articleModal = this.modalCtrl.create(HtmlModal, modalParams);
    articleModal.present();
  }
}
