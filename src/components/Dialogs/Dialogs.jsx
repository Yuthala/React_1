import classes from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				<div className={classes.dialog + ' ' + classes.active}>
					User 1
				</div>
				<div className={classes.dialog}>
					User 2
				</div>
				<div className={classes.dialog}>
					User 3
				</div>
				<div className={classes.dialog}>
					User 4
				</div>
				<div className={classes.dialog}>
					User 5
				</div>
				<div className={classes.dialog}>
					User 6
				</div>
			</div>
			<div className={classes.messages}>
				<div className={classes.message}>Hi!</div>
				<div className={classes.message}>How are you?</div>
				<div className={classes.message}>Yo!</div>
			</div>
		</div>
	)
}

export default Dialogs;