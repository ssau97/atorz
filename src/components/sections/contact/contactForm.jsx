"use client";

import React, { useState } from "react";
import { RiMailLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const ContactForm = () => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    budget: "",
    reference: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 구글 폼 응답 URL (전달해주신 주소에서 수정됨)
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScVOI8k0a5cygzUrBRbVs2RGs7sy-bGqX6QCu-_toLb9Vxpfw/formResponse";

    // 추출한 entry ID 매핑
    const formDataPayload = new FormData();
    formDataPayload.append("entry.710808333", formData.name);
    formDataPayload.append("entry.1502332718", formData.email);
    formDataPayload.append("entry.1722514699", formData.category);
    formDataPayload.append("entry.1722383089", formData.budget);
    formDataPayload.append("entry.651195894", formData.reference);
    formDataPayload.append("entry.684194563", formData.message);

    try {
      // 구글 폼으로 데이터 전송 (CORS 이슈 방지를 위해 mode: 'no-cors' 사용)
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataPayload,
      });

      alert("문의가 성공적으로 전달되었습니다. 검토 후 연락드리겠습니다.");
      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        category: "",
        budget: "",
        reference: "",
        message: "",
      });
      e.target.reset(); // 입력창 비우기
    } catch (error) {
      console.error("Error!", error);
      alert("전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name / Company</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name or Company"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@atorz.com"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="category">Project Category</label>
                  <select
                    id="category"
                    name="category"
                    className="form-control"
                    required
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                      border: "1px solid #333",
                    }}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Strategy & Branding">
                      Strategy & Branding
                    </option>
                    <option value="Platform & Infrastructure">
                      Platform & Infrastructure
                    </option>
                    <option value="Space & Experience">
                      Space & Experience
                    </option>
                    <option value="Full Integrated Solution">
                      Full Integrated Solution
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-control"
                    required
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                      border: "1px solid #333",
                    }}
                    onChange={handleChange}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="Under $10k">Under $10k</option>
                    <option value="$10k - $30k">$10k - $30k</option>
                    <option value="$30k - $70k">$30k - $70k</option>
                    <option value="$70k+">$70k+</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="reference">
                    Reference URL / Benchmarking
                  </label>
                  <input
                    type="text"
                    id="reference"
                    name="reference"
                    className="form-control"
                    placeholder="https://..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="message">Project Goals & Details</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Tell us about your project goals."
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="theme-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Proposal"}{" "}
                    <i>
                      <RiMailLine size={15} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
