import React, { FC, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './scoreboardTab.scss';
import { IScoreboardResponse } from '../../../services/scoreboard/scoreboard.types';
import ScoreboardService from '../../../services/scoreboard/scoreboard.service';
import { IScoreboardProps } from './scoreboard.type';
import { badgeRepresentationImageByType } from '../../../shared/constants/badge.constants';

const ScoreboardTab: FC<IScoreboardProps> = (props) => {
  const [scoreboard, setScoreboard] = useState<IScoreboardResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScoreboard() {
      try {
        const scoreboard = await ScoreboardService.getScoreboard(props.organizationId);
        setScoreboard(scoreboard);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchScoreboard();
  }, []);

  if (loading) {
    return  null;
  }

  return (
    <div className="scoreboard-tab--wrapper">
      <h2>Scoreboard</h2>
      {scoreboard.length > 0 ?
        <div className="scoreboard-tab-table">
          <div className="scoreboard-tab-table-content">
            <Table borderless={true} className='scoreboard-table'>
              <thead className="scoreboard-tab-table-head">
                <tr>
                  <th>Rank:</th>
                  <th>Address:</th>
                  <th>Badges:</th>
                </tr>
              </thead>
              <tbody>
              {scoreboard.map((score, index) => {
                return (
                  <tr className='scoreboard-row' key={index}>
                    <td><div className='scoreboard-no'>{index + 1}</div></td>
                    <td>{score.address}</td>
                    <td>
                      {score.badges.map((badge) => {
                        return (
                          <img key={badge.id} src={badgeRepresentationImageByType[badge.badge_type]}/>
                        )
                      })}
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </Table>
          </div>
        </div>
        : <p>Scoreboard not formed yet...</p>
      }
    </div>
  );
};
export default ScoreboardTab;