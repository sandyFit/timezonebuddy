import React, { useState } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Pager } from '@progress/kendo-react-data-tools';
import teamData from '../data/team';

// Custom pager component
const MyPager = ({ skip, take, total, onPageChange }) => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Pager
                responsive={true}
                skip={skip}
                take={take}
                total={total}
                onPageChange={onPageChange}
                buttonCount={5}
                info={true}
                previousNext={true}
                type="numeric"
                pageSizes={[5]} 
            />
        </div>
    );
};

const TeamMembers = () => {
    const [page, setPage] = useState({
        skip: 0,
        take: 5,
    });

    const pageChange = (event) => {
        setPage(event.page);
    };

    return (
        <div className='team-container'>
            <h3 className='team-title'>The Staff</h3>
            <Grid
                data={teamData.slice(page.skip, page.take + page.skip)}
                skip={page.skip}
                take={page.take}
                total={teamData.length}
                pageable={true}
                onPageChange={pageChange}
                pager={(props) => <MyPager {...props} />}
                className="team-grid"
            >
                <GridColumn field="name" title="Name" width="200px" />
                <GridColumn field="jobTitle" title="Job Title" width="200px" />
                <GridColumn field="timeZone" title="Time Zone" width="200px" />
                <GridColumn field="workStart" title="Work Start (Hour)" width="150px" />
                <GridColumn field="workEnd" title="Work End (Hour)" width="150px" />
                <GridColumn
                    field="imageSrc"
                    title="Profile Image"
                    width="150px"
                    cell={(props) => (
                        <td>
                            <img
                                src={props.dataItem.imageSrc}
                                alt={props.dataItem.name}
                                width="50"
                                height="50"
                                style={{ borderRadius: '50%' }}
                            />
                        </td>
                    )}
                />
            </Grid>
        </div>
    );
};

export default TeamMembers;
