import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Dialog } from '@progress/kendo-react-dialogs';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Badge } from '@progress/kendo-react-indicators';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Scheduler, DayView, WeekView } from '@progress/kendo-react-scheduler';
import { Fade } from '@progress/kendo-react-animation';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { IntlProvider, load, LocalizationProvider } from '@progress/kendo-react-intl';
import '@progress/kendo-theme-default/dist/all.css';
import WorldClock from '../components/WorldClock';


const Home = () => {

    return (
        <section>                      
            <WorldClock />
        </section>
    );

}

export default Home;

