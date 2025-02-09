package com.pizzahaven.email_service.model;

import org.springframework.stereotype.Component;

@Component
public class SendEmail {

	private String emailId;
	private String subject;
	private String text;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getText() {
		return text;
	}

	@Override
	public String toString() {
		return "SendEmail [emailId=" + emailId + ", subject=" + subject + ", text=" + text + "]";
	}

	public void setText(String text) {
		this.text = text;
	}

}
