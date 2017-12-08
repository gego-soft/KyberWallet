import React from "react"
import { connect } from "react-redux"
// import { TokenSelect } from '../../components/CommonElement'
 import { hideLangugaModal, showLangugaModal } from "../../actions/utilActions"
import constants from "../../services/constants"
import { Modal } from '../../components/CommonElement'
import { Link } from 'react-router-dom'

@connect((store) => {

  return {
    utils: store.utils
  }

})

export default class Footer extends React.Component {

  closeModal = (event) => {
    this.props.dispatch(hideLangugaModal())
  }

  openLanguageModal = () => {
    this.props.dispatch(showLangugaModal())
  }

  content = () => {
    return (
      <div className="language-list">
        <div class="title">Select your language</div><a className="x" onClick={this.closeModal}>&times;</a>
        <div class="content">
          <div class="row tokens small-up-2 medium-up-3 large-up-4">
            <div class="column gutter-15">
              <a className={"token-stamp selected"}>
                <img src={"/assets/img/langs/uk.svg"} /><span class="name">English</span>
              </a>
            </div>
            <div class="column gutter-15">
              <a className={"token-stamp empty"}>
                <img src={"/assets/img/langs/cn.svg"} /><span class="name">China</span>
              </a>
            </div>
            <div class="column gutter-15">
              <a className={"token-stamp empty"}>
                <img src={"/assets/img/langs/kr.svg"} /><span class="name">Korea</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  scrollTop = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div class="row">
        <div class="column">
          <ul class="links">
            <li><Link to="/info" onClick={() => this.scrollTop()}>Info</Link></li>
            <li><a onClick={() => this.openLanguageModal()}>Language</a></li>
          </ul>
        </div>
        <Modal className={{
          base: 'reveal medium',
          afterOpen: 'reveal medium'
        }}
          isOpen={this.props.utils.langModal?true:false}
          onRequestClose={this.closeModal}
          contentLabel="select language"
          content={this.content()}
          size="large"
        />
      </div>

    )
  }
}
