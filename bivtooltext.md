# BIV-assessment for Researchers Version 1.3
## Translation of BIV-assessment for researchers (Derived from general VU BIV assessment)
_This markdown document shows the overall structure of the tool and the coding of the risks that is behind the scenes in the online tool_

The security risks for your data can vary depending on nature of your data (i.e. raw data, processed data, video data, physical measurements), therefore, it is recommended to carry out this BIV assessment or analysis for each data asset described in your data management plan

* Data asset (e.g. raw video data)
_open text field_

* Do you collect data from human subjects?
  * Yes _questions asking about human subjects will appear in the form_
  * No _questions about human subjects will NOT appear in the form_

### “Availability”-related security risk assessment

* How readily do your data need to be available?
  * 24/7, i.e. never not available _Code as HIGH_
  * Frequently, but not 24/7 (e.g. 9-5/M-F or always available unless maintenance to the system is required) _Code as MEDIUM_
  * Anything less frequent than regular work hours  _Code as LOW_

* Additional information:
_open text field_


* How long would the data need to be unavailable for your research project to suffer serious harm, i.e. not just minor inconveniences? Describe the harm that could occur in the text box.
  * _Examples of harm include:
    * Inability to move forward with research project
    * Inability to provide data to a third party or grant provider
    * Breach of contract/legal requirements, i.e. if you have a contractual agreement to share data with another party or when you are legally required to provide the data upon request, for example with WMO-applicable research 15 years post-treatment
    * Reputational damage to the researcher(s) and the VU, i.e. inability to provide data on request could lead to retraction of papers
    * Inability of temporary research staff, in particular PhD candidates, to complete their work on time, thus damaging their professional development
    * Financial costs due to delays_

  * Max. 1 hour _Code as HIGH_
  * Max. 1 day _Code as MEDIUM_
  *	Max. 1 week _Code as LOW_
  *	Max. 1 month _Code as LOW_

* Additional information:
_open text field_


*	Are there specific situations where access to the data absolutely cannot be lost (e.g. while a long computation is running or when batch processing is scheduled)? Describe the specific situations in the where loss of access would be detrimental to your work in the text box below.
  *	Yes _Code as HIGH_
  *	No _Code as LOW_

* Additional information:
_open text field_


*	How severely would the research project be harmed if the data are lost? Consider the worst possible scenario, i.e. at the start of data collection, data loss may not be a big deal, but upon completion of data collection it could be a major issue.
  *	Loss of data would be a disaster; no recovery is possible _Code as HIGH_
  * Loss of data is a problem, but recovery should take about 1 week and the loss would only mildly impact the research goals, budget or reputation of the researcher/VU _Code as MEDIUM_
  *	Loss of data is not an issue; the data can be easily reproduced _Code as LOW_

* Additional information:
_open text field_


*	How long do the data need to be stored?
	* 10 years after the last publication (non-WMO research) _Code as LOW_
  _following answer option only appears if research collects data from human subjects_
	* 15 years after the last publication (WMO research) _Code as MEDIUM_
  _following answer option only appears if research collects data from human subjects_
	* 25 years after the last publication (GCP research) _Code as HIGH_
	* Indefinitely _Code as HIGH_

* Additional information:
_open text field_


#### Total “Availability” Score
	1. If at least one field is coded as HIGH, the total score is HIGH
  1. If no fields are coded as HIGH, but at least one field is coded as MEDIUM, the total score is MEDIUM
  1. If no fields are coded as HIGH or MEDIUM, but at least one if coded as LOW, the total score is LOW
  1. If no fields are answered, the score is UNKNOWN


### “Integrity”-related security risks assessment

*	Do multiple users need to be able to access, utilize and/or edit the data simultaneously, thereby increasing the risk of data corruption/unauthorized modification?
  *	No _Code as LOW_
  *	Yes _FOLLOW-UP QUESTIONS_
	  * In what way do the multiple users need to be able to access the data?
      * All users can access the data concurrently, but the data doesn’t need to be edited simultaneously _Code as MEDIUM_
	    * Data must be accessible and editable for multiple users simultaneously _Code as HIGH_
	  * How many users need to access, utilize and/or edit the data on a regular basis?
	    * Ten or more _Code as HIGH_
	    * Four to nine _Code as MEDIUM_
	    * Three or fewer _Code as LOW_
* Additional information:
_open text field_


*	Have measures to account for data entry error, data cleaning, measurement error, bias and so forth already been addressed in your data management plan and/or research proposal?
	* Yes _Code as LOW_
  *	No _Code as MEDIUM (AND GIVE ADVICE TO WRITE A DMP)_
  *	It is not possible to account for these issues _Code as HIGH_

* Additional information:
_open text field_


*	How severe would the impact on your research be if data become corrupted during storage or unauthorized changes are made to the data after collection? Describe the harm that could occur in the text box.
  *	Examples of harm include:
    *	Incorrect research conclusions are drawn based on the data leading to retraction of published articles and reputational damage
    * Erroneous influence on public policy or future research
    *	Financial impact and delays to completion of the research project in order to correct the corruption or unauthorized changes

  *	Minimal to none _Code as LOW_
  *	Moderate _Code as MEDIUM_
  *	Severe _Code as HIGH_

* Additional information:
_open text field_




_following question only appears if research collects data from human subjects_
* If data become corrupted in storage or unauthorized changes are made after collection, could this have a negative impact on your research participants (e.g. inappropriate questions are posed in a follow-up questionnaire; participants need to be contacted repeatedly to correct mistakes etc.)
  * Yes, and the impact is serious _Code as HIGH_
  *	Yes, but the impact is minimal _Code as MEDIUM_
  *	No, there is no impact on participants _Code as LOW_

* Additional information:
_open text field_


#### Total “Integrity” Score
  1. If at least one field is coded as HIGH, the total score is HIGH
  1. If no fields are coded as HIGH, but at least one field is coded as MEDIUM, the total score is MEDIUM
  1. If no fields are coded as HIGH or MEDIUM, but at least one if coded as LOW, the total score is LOW
  1. If no fields are answered, the score is UNKNOWN

### “Confidentiality”-related security risks

* If the data in question are not kept confidential, how severely would the VU’s reputation be affected? Describe the negative impact that could occur in the text box.
  * Examples of reputational harm include:
    * Loss of public trust
    * Loss of trust from external research partners; damage to third party relationships
    * Reputational damage to individual researcher(s)

  *	Severely _score as HIGH_
  *	Moderately _score as MEDIUM_
  *	Minimally _score as LOW_

* Additional information:
  _open text field_


* If the data in question are not kept confidential, how severe would the legal and/or contractual liabilities be for the VU (e.g. fines, legal action by third party partners)?
  * Very severe _score as HIGH_
  * Moderately severe _score as MEDIUM_
  * Minimal to none _score as LOW_

* Additional information:
_open text field_


#### Total “Confidentiality” Score
  1. If at least one field is coded as HIGH, the total score is HIGH
  1. If no fields are coded as HIGH, but at least one field is coded as MEDIUM, the total score is MEDIUM
  1. If no fields are coded as HIGH or MEDIUM, but at least one if coded as LOW, the total score is LOW
  1. If no fields are answered, the score is UNKNOWN

_following section only appears if research collects data from human subjects_
### “Privacy”- related security risks

* How would you describe your research participants (multiple answers possible)?
  * Healthy adults _score as 0_
  * Healthy children _score as +1_
  * Adult patients (i.e. having any medical condition, mental or physical; not necessarily inpatients)  score as +2
  * Pregnant women:
    * Is the nature of the research something where pregnant women may be judged on their behaviours/health-status, e.g. smoking during pregnancy?
      * Yes _score as +2_
      * No _score as +1_
  *	Pediatric patients (i.e. having any medical condition, mental or physical; not necessarily inpatients)  score as +2
  *	LGBTQ+ _score as +2_
  *	Refugees _score as +2_
  *	Sex workers _score as +2_
  *	Felons or other criminal background _score as +2_
  *	Physically-impaired _score as +2_
  *	Mentally-impaired _score as +2_
  *	Racial, religious or other visible minority _score as +2_

#### Total question score
	1. If at least one question is scored as +2, overall score is +2
	1. If no questions are scored +2, but at least one question is scored +1, overall score is +1
	1. If highest score is 0, overall score is 0
  1. If nothing is selection, overall score in UNKNOWN

* Which of the following best describes the data you are collecting (multiple answers possible)?
_NB: don’t forget that you should complete this tool for each data asset described in your data management plan_
  * Directly identifying information _score as +2_
    * NAW, e-mail address
    *	IP-address, MAC-address
    *	Birthdate
	* “Special” data, according to the GDPR _score as +2_
_NB: health-related data and physical measurements are addressed separately_
	  * Genetic data
	  * Race or ethnicity
    *	Religion or other belief systems
    *	Sexual preferences
    *	Criminal activity
    *	Union memberships
    *	Political opinions
    *	Health-related data and physical measurements _follow-up questions_
      *	What kind of health-related/physical data will be collected (multiple answers possible)?
        *	Height, weight, waist circumference, body fat and other related measures _score as +1_
        *	Cardiovascular measurements (e.g. blood pressure, heart rate, cardiac output, ECGs) _score as +1_
        *	VU Ambulatory Monitoring System data (e.g. circadian rhythms, sleep-wake cycle, response to stressors) _score as +1_
        *	Exercise capacity (e.g. VO2 Max) _score as +1_
        *	Accelerometry _score as +1_
        *	Pulmonary function testing _score as +1_
        *	Blood tests (levels of: glucose, cholesterol, fatty acids, vitamins, hormones etc.) _score as +1_
        *	Neurological imaging (e.g. fMRI) _score as +1_
        *	Other neurological testing (e.g. EEGs, facial cues, eye-tracking, reaction times) _score as +1_
        *	Tongue positioning/non-nutritive sucking _score as +1_
        *	Genetic risk factors for disease _score as +2_
        *	Mental health, stress, well-being, self-efficacy, personality traits _score as +2_
        *	History of mental or physical abuse _score as +2_
        *	Known medical conditions/diagnoses _score as +2_
        *	Medications (including herbals and supplements) _score as +2_
        *	Family history _score as +2_
        *	Smoking status _score as +2_
        *	Alcohol consumption _score as +2_
        *	Illicit drug use _score as +2_

*	Experimental data:
  *	What kind of experimental data will be collected (multiple answers possible)?
    *	(If not recorded under health-related data) Neurological imaging (e.g. fMRI) _score as +1_
    *	(If not recorded under health-related data) Other neurological testing (e.g. EEGs, facial cues, eye-tracking, reaction times) _score as +1_
    *	Speech analysis _score as +2_
    *	Testing of executive function _score as +2_
    *	Financial games _score as 0_
    *	Personality tests _score as +2_
    *	Memory tests (eg. MMSE) _score as +2_
    *	Other neuropsychological testing _score as +2_

*	Socio-economic information:
  *	What kind of experimental data will be collected (multiple answers possible)?
    *	Age _score as 0_
    *	Gender/sex _score as +1_
    *	Income _score as +2_
    *	Employment status _score as +1_
    *	Current occupation _score as +1_
    *	Highest level of education _score as +2_
    *	GIS or other spatial/environmental data _score as +1_

*	Academic performance scores _score as +2_

*	Observational data:
  *	Are audiovisual recordings made of the observation?
    *	No, an observer will only take notes _score as 0_
    *	Yes, audiovisual data will be recorded: _follow up questions_
      *	Could the subject matter addressed in the audiovisual data be considered sensitive (i.e. if a person’s answers were made known to others, could it harm the individual)?
        *	Yes _score as +2_
        *	No _score as +1_
      *	Can the participant be directly identified in the audiovisual recording (i.e. names are used, faces are recorded etc.)?
        *	Yes _score as +2_
        *	No _score as +1_

*	Questionnaire data:
  *	Could topics addressed in the questionnaire be considered sensitive (i.e. if a person’s answers were made known to others, could it harm the individual)?
    *	Yes _score as +2_
    *	No _score as 0_
  *	Does the questionnaire collect special types of data (health-related, race/ethnicity, religion/philosophies, sexual preferences, criminal history, union memberships, political opinions) or socio-economic information?
  _NB: This question can be answered as “no/recoded above” if this information has not already been recorded above_
    *	Yes _score as +2_
    *	No/recorded above _score as 0_
  *	Are there open text fields in the questionnaire?
    *	Yes _score as +2_
    *	No _score as 0_

*	Qualitative data, namely interviews
  *	Is the interview recorded on an audiovisual medium?
    *	No, an assistant writes a transcript during the interview _score as +1_
    *	Yes, the interview is recorded on an audiovisual medium: _follow up question_
      *	Could the subject matter addressed in the audiovisual data be considered sensitive (i.e. if a person’s answers were made known to others, could it harm the individual)?
        *	Yes _score as +2_
        *	No _score as +1_

#### Total question score
	1. If at least one question is scored as +2, overall score is +2
	1. If no questions are scored +2, but at least one question is scored +1, overall score is +1
	1. If highest score is 0, overall score is 0
  1. If nothing is selection, overall score in UNKNOWN

*	Would it be possible to infer sensitive information (e.g. sexual preferences, religion, health status, political opinions, criminal activity) about an individual by combining information, either within the research data or with public information, or through attribute disclosure (e.g. if a subset of participants with the same characteristics all have the same sensitive condition, such as HIV, it can be inferred that all participants in the dataset with those characteristics have HIV)?
  *	Yes _score as +2_
  *	No _score as 0_

#### Overall score for previous three questions
	1. If total score is 6 or higher, score as VERY HIGH RISK
	1. If total score is 2-6, score as HIGH RISK
	1. If total score is 1-2, score as MEDIUM RISK
	1. If total score is 0, score as LOW RISK
  1. If no score was generated, score as UNKNOWN

*	If the data in question are leaked to the public, could there be a negative impact on the participant(s)? Describe the negative impact that could occur in the text box (or refer to the description of risks to participants that you documented in your data protection impact assessment).
  *	Examples of negative impact include:
    *	Risk of mental or physical harm; reduced safety or well-being
    *	Blackmail
    *	Identity or financial fraud
    *	Discrimination

  *	Yes _score as HIGH_
	* No _score as LOW_

* Additional information:
_open text field_

#### Total “Privacy” Score
  1. If at least one field is coded as VERY HIGH, the total score is HIGH
  1. If no fields are coded as VERY HIGH, but at least one field is coded as HIGH, the total score is HIGH
  1. If no fields are coded as HIGH or VERY HIGH, but at least one field is coded as MEDIUM, the total score is MEDIUM
  1. If no fields are coded as VERY HIGH, HIGH or MEDIUM, but at least one if coded as LOW, the total score is LOW
  1. If no fields are answered, the score is UNKNOWN
