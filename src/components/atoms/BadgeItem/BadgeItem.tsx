import React, { FC, useState } from 'react';
import {EBadgeStatus, IBadgeItemProps} from './badgeItem.types'
import './badgeItem.scss';
import {badgeImageByType} from "../../../shared/constants/badge.constants"
import Pending from "../../../shared/assets/img/pending.svg"
import Successful from "../../../shared/assets/img/successful.svg"
import Sent from "../../../shared/assets/img/sent.svg"
import Vote from "../../../shared/assets/img/vote.svg"
import { Modal } from 'react-bootstrap';
import Button from '../Button/Button';
import VoteService from '../../../services/vote/vote.service';
import ContractService from '../../../services/contract/contract.service';


const BadgeItem: FC<IBadgeItemProps> = (props) => {

    const [showVoteDialog, setShowVoteDialog] = useState(false);
    const [showInfoDialog, setShowInfoDialog] = useState(false);

    const handleVote = (vote: boolean) => async () => {
        try {
            await VoteService.voteBadge(props.badgeId, vote)
        } catch (error) {
        } finally {
            setShowVoteDialog(false);
        }
    };

    const handleTokenSend = async () => {
        try {
            if (!props.badge) {
                throw new Error("Can't send badge without address")
            }

            await ContractService.sendBadge(props.badgeId, props.badge.created_for_address);
        } catch (error) {
        } finally {
            setShowInfoDialog(false);
        }
    };

    const toggleVoteDialog = () => {

        setShowVoteDialog(true);
    }

    const toggleInfoDialog = () => {
        setShowInfoDialog(true);
    }

    let status;
    if(props.status === EBadgeStatus.PENDING){
        // status = <span>Pending</span>;
        status = <img className="badge-status" src={Pending} alt={"Pending"}/>
    }
    if(props.status === EBadgeStatus.VOTING){
        //status = <span>Vote</span>;
        status = <img className="badge-status" src={Vote} alt={"Vote"} onClick={toggleVoteDialog}/>
    }
    if(props.status === EBadgeStatus.VOTE_SUCCESSFUL){
        //status = <span>Successful</span>;
        status = <img className="badge-status" src={Successful} alt={"Successful"} onClick={toggleInfoDialog}/>
    }
    if(props.status === EBadgeStatus.SENT){
        //status = <span>Sent</span>;
        status = <img className="badge-status" src={Sent} alt={"Sent"}/>
    }
        return(
          <>
              <Modal show={showVoteDialog} onHide={() => setShowVoteDialog(false)}>
                  <Modal.Header closeButton>
                      Vote
                  </Modal.Header>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleVote(true)}>
                          VOTE FOR
                      </Button>
                      <Button variant="primary" onClick={handleVote(false)}>
                          VOTE AGAINST
                      </Button>
                  </Modal.Footer>
              </Modal>

              <Modal show={showInfoDialog} onHide={() => setShowInfoDialog(false)}>
                  <Modal.Header closeButton>
                      Token info
                  </Modal.Header>
                  <Modal.Body>
                      Here goes the info
                  </Modal.Body>
                  {
                      props.status === EBadgeStatus.VOTE_SUCCESSFUL &&
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleTokenSend}>
                              SEND TOKEN
                          </Button>
                      </Modal.Footer>
                  }
              </Modal>

              <div className="badge-item--wrapper">
                  <img src={badgeImageByType[props.badgeType]} />
                  {status}
              </div>
          </>
        )
}

export default BadgeItem;
