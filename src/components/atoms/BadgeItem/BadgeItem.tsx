import React, { FC, useState } from 'react';
import { EBadgeStatus, IBadgeItemProps } from './badgeItem.types';
import './badgeItem.scss';
import { badgeImageByType } from '../../../shared/constants/badge.constants';
import Pending from '../../../shared/assets/img/pending.svg';
import Successful from '../../../shared/assets/img/successful.svg';
import Sent from '../../../shared/assets/img/sent.svg';
import Vote from '../../../shared/assets/img/vote.svg';
import { Modal } from 'react-bootstrap';
import Button from '../Button/Button';
import VoteService from '../../../services/vote/vote.service';
import ContractService from '../../../services/contract/contract.service';
import AddressService from '../../../services/address/address.service';
import { IAddressResponse } from '../../../services/address/addressService.types';

const BadgeItem: FC<IBadgeItemProps> = (props) => {

  const [showVoteDialog, setShowVoteDialog] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [creatorInfo, setCreatorInfo] = useState<IAddressResponse | undefined>(undefined);

  const handleVote = (vote: boolean) => async () => {
    try {
      await VoteService.voteBadge(props.badgeId, vote);
    } catch (error) {
    } finally {
      setShowVoteDialog(false);
    }
  };

  const handleTokenSend = async () => {
    try {
      if (!props.badge) {
        throw new Error('Can\'t send badge without address');
      }

      await ContractService.sendBadge(props.badgeId, props.badge.created_for_address);
    } catch (error) {

    } finally {
      setShowInfoDialog(false);
    }
  };

  const toggleVoteDialog = (e: any) => {
    e.stopPropagation();
    setShowVoteDialog(true);
  };

  const toggleInfoDialog = async (e: any) => {
    e.stopPropagation();

    if (props.badge) {
      setCreatorInfo(await AddressService.getAddress(props.badge.creator_address_id));
      setShowInfoDialog(true);
    }
  };

  let status;
  if (props.status === EBadgeStatus.PENDING) {
    // status = <span>Pending</span>;
    status = <img className="badge-status" src={Pending} alt={'Pending'}/>;
  }
  if (props.status === EBadgeStatus.VOTING) {
    //status = <span>Vote</span>;
    status = <img className="badge-status" src={Vote} alt={'Vote'} onClick={toggleVoteDialog}/>;
  }
  if (props.status === EBadgeStatus.VOTE_SUCCESSFUL) {
    //status = <span>Successful</span>;
    status = <img className="badge-status" src={Successful} alt={'Successful'}/>;
  }
  if (props.status === EBadgeStatus.SENT) {
    //status = <span>Sent</span>;
    status = <img className="badge-status" src={Sent} alt={'Sent'}/>;
  }

  return (
    <>
      <Modal show={showVoteDialog} onHide={() => setShowVoteDialog(false)}>
        <Modal.Header closeButton>
          Vote
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleVote(true)}>
            VOTE FOR
          </Button>
          <Button variant="secondary" onClick={handleVote(false)}>
            VOTE AGAINST
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showInfoDialog && (props.badge)}
             onHide={() => setShowInfoDialog(false)}>
        <Modal.Header closeButton>
          Token info
        </Modal.Header>
        <Modal.Body>
          <p className='badgeItemInfoTitle'>Creation date</p>
          <p className='badgeItemInfoBody'>{props.badge?.createdAt}</p>

          <p className='badgeItemInfoTitle'>Badge type</p>
          <p className='badgeItemInfoBody'>{props.badge?.badge_type}</p>

          {
            props.badge?.special_note &&
            <>
              <p className='badgeItemInfoTitle'>Special note</p>
              <p className='badgeItemInfoBody'>{props.badge?.special_note}</p>
            </>
          }

          {
            creatorInfo &&
            <>
              <p className='badgeItemInfoTitle'>Created by</p>
              <p className='badgeItemInfoBody'>{creatorInfo?.address}</p>
            </>
          }

          <p className='badgeItemInfoTitle'>Originally issued to</p>
          <p className='badgeItemInfoBody'>{props.badge?.created_for_address}</p>
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
        <img src={badgeImageByType[props.badgeType]} onClick={toggleInfoDialog}/>
        {status}
      </div>
    </>
  );
};

export default BadgeItem;
