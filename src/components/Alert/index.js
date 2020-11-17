import React, {useState} from "react";
import PropTypes from "prop-types";
import classSet from 'classnames';

import css from './styles.css';

export function Alert(props) {
    const [hidden, setHidden] = useState(props.hidden)

    return (
        <div
            className={classSet({
                [css.error]: props.error,
                [css.alert]: true,
                [css.hidden]: hidden,
            })}
        >
            <div>
                {
                    props.error
                        ? <img className={css.alert_checkmark} src="src/icon/delete.svg"  alt={'success'}/>
                        : <img className={css.alert_checkmark} src="src/icon/checkmark.svg"  alt={'error'}/>
                }
            </div>
            <div className={css.alert_text}>
                <p> {props.message}</p>
            </div>
            <div>
                <button className={css.alert_submit} onClick={() => setHidden(true)}/>
            </div>
        </div>
    )
}

Alert.propTypes = {
    error: PropTypes.bool,
    hidden: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}