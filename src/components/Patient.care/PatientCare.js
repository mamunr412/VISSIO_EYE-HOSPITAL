import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../image/Patient-Carephoto.jpg'
import './PatientCare.css'
const PatientCare = () => {
    return (
        <div>
            <Container>
                <Row sm={1}>
                    <Col>
                        <div className="text-center">
                            <div className="mt-5">
                                <img className="img" src={img} alt="" />
                            </div>
                            <div className=" mt-5 details ">
                                <h3>How is patient care a human rights issue?</h3>
                                <p>
                                    <h6>What is patient care?</h6>
                                    Patient care refers to the prevention, treatment, and management of illness and the preservation of physical and mental well-being through services offered by health professionals.1 Patient care consists of services rendered by health professionals (or non-professionals under their supervision) for the benefit of patients.2 A patient is a user of health care services whether he or she is healthy or sick.3

                                    What are the issues and how are they human rights issues?
                                    Patients are entitled to the full range of human rights. Health care providers must respect each patient’s dignity and autonomy, right to participate in making health care decisions, right to informed consent, right to refuse medical treatment, and right to confidentiality and privacy. The attention, treatment, and care that each health care provider gives to a patient must respect the human rights of every one of his or her patients.

                                    The human rights-based approach to patient care draws from standards contained in the international human rights framework, which are often mirrored in regional treaties and national constitutions. It differs from patients’ rights, which codify particular rights that are relevant only to patients. Human rights standards apply to all stakeholders in the delivery of health care—including both patients and care providers.

                                    A human rights-based approach seeks, above all, to uphold the inherent human dignity of all actors in the care provider-patient relationship. This relationship can be a complex one, especially when coupled with health care delivery. For example, as medicine becomes ever more advanced, providers and patients must work together to make diagnostic and therapeutic decisions.4 Financial and quality issues are always present in health care delivery and can lead to inequality and discrimination.5 Greater understanding is needed of the social determinants of health that straddle the lines between traditional medicine and a broader concept of health, as well as of the interdependence of the right to health and the realization of all human rights.6 A human rights-based approach uses the human rights framework to analyze these elements of patient care, among others.

                                    Below are some common human rights issues that arise in patient care settings. This list is not comprehensive. The list alternates between highlighting issue areas and highlighting marginalized groups whose human rights are frequently violated in the health care setting.

                                    Right to information
                                    Patients are often unaware of their rights, including the right to information on their condition and the right to access their medical records. In a study conducted at four hospitals in Lithuania, 85% of the staff and 56% of the patients surveyed had heard of or read about patients’ rights laws.7 Moreover, only 50% of professionals and 69% of patients thought it was necessary for patients to have information about diagnosis, treatment results, and alternative modes of treatment.8 Another study in Macedonia found that 82% of respondents stated that there are patient rights, but 56% did not know what their rights were.9

                                    Patients have the right to information about their health status, treatment options and reasonable alternatives, and the likely benefits and risks of proposed treatment and non-treatment. Patients also have the right to access their medical chart and medical history.</p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default PatientCare;