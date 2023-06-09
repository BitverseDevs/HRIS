export type previewDtrCsvItem = {
    bio_id: string;
    date_time: string;
    time_in: string;
    time_out: string;
    branch: string;
};


export type DTRCutoffSummaryType = {
    id: number;
    business_date_from: string;
    business_date_to: string;
    paid_leaves_total: number;
    reg_ot_total: number;
    nd_ot_total: number;
    sp_holiday_total: number;
    sp_holiday_total_hours: number;
    reg_holiday_total: number;
    absent_total: number;
    leaves_type_used?: string | null;
    overbreak_total?: string | number | null;
    lates_total: number;
    undertime_total: number;
    total_hours: number;
    is_processed: boolean;
    date_deleted?: string | null;
    emp_no: number;
    cutoff_code: number;
};

export type DTRCutoffListType = {
    id: number;
    co_name: string;
    co_description: string;
    co_date_from: string;
    co_date_to: string;
    reg_days_total: number;
    co_is_processed: boolean;
    credit_date: string;
    payroll_group_code: number;
    division_code: number;
}

export type DTRCutoffListEmployees = {
    id: number;
    user: object | null;
    employee_image: string | null;
    emp_no: number;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    suffix: string | null;
    birthday: string;
    birth_place: string | null;
    civil_status: string;
    gender: string;
    address: string;
    provincial_address: string | null;
    mobile_phone: string;
    email_address: string;
    bio_id: number | null;
    date_hired: string;
    date_resigned: string | null;
    approver: number;
    date_added: string;
    date_deleted: string | null;
    city_code: number | null;
    branch_code: number | null;
    department_code: number | null;
    division_code: number | null;
    position_code: number | null;
    rank_code: number | null;
    payroll_group_code: number;
    tax_code: string | null;
    pagibig_code: string | null;
    sssid_code: string | null;
    philhealth_code: string | null;
}


export type CutoffListMergeSelectionState = {
    emp_no: number[],
    cutoff_code: number,
}



export type ViewPayrollPayPerEmployee = {
    id: number;
    cutoff: DTRCutoffListType;
    dtr_cutoff: DTRCutoffSummaryType;
    emp_cname: string;
    run_date: string;
    accnt_no: string;
    salary_basic: number;
    salary_allowance: number;
    salary_other: number;
    salary_type: string;
    work_days_total: number;
    daily_salary_basic: number;
    daily_salary_allowance: number;
    daily_salary_other: number;
    leaves_amount_a: number;
    ot_amount_a: number;
    nd_amount_a: number;
    reg_holiday_amount_a: number;
    sp_holiday_amount_a: number;
    lates_amount_d: number;
    utime_amount_d: number;
    sssc_amount_d: number;
    sss_cashloan_d: number;
    sss_calloan_d: number;
    pagibigc_amount_d: number;
    pagibig_cloan_d: number;
    pagibig_hloan_d: number;
    pagibig_calloan_d: number;
    philhealthc_amount_d: number;
    cash_advance_amount_d: number;
    insurance_d: number;
    other_d: number;
    gross_pay: number;
    tax_amount_d: number;
    net_pay: number;
    absent_amount: number;
    date_deleted: string | null;
    is_payslip_printed: boolean;
    pr_cutoff_code: number;
    emp_no: number;
    cutoff_summary_code: number;
}


export const PaySlipDataInitialState: ViewPayrollPayPerEmployee = {
    id: 0,
    cutoff: {
        id: 0,
        co_name: '',
        co_description: '',
        co_date_from: '',
        co_date_to: '',
        reg_days_total: 0,
        co_is_processed: false,
        credit_date: '',
        payroll_group_code: 0,
        division_code: 0,
    },
    dtr_cutoff: {
        id: 0,
        business_date_from: '',
        business_date_to: '',
        paid_leaves_total: 0,
        reg_ot_total: 0,
        nd_ot_total: 0,
        sp_holiday_total: 0,
        sp_holiday_total_hours: 0,
        reg_holiday_total: 0,
        absent_total: 0,
        leaves_type_used: '',
        overbreak_total: '',
        lates_total: 0,
        undertime_total: 0,
        total_hours: 0,
        is_processed: false,
        date_deleted: '',
        emp_no: 0,
        cutoff_code: 0,
    },
    emp_cname: '',
    run_date: '',
    accnt_no: '',
    salary_basic: 0,
    salary_allowance: 0,
    salary_other: 0,
    salary_type: '',
    work_days_total: 0,
    daily_salary_basic: 0,
    daily_salary_allowance: 0,
    daily_salary_other: 0,
    leaves_amount_a: 0,
    ot_amount_a: 0,
    nd_amount_a: 0,
    reg_holiday_amount_a: 0,
    sp_holiday_amount_a: 0,
    lates_amount_d: 0,
    utime_amount_d: 0,
    sssc_amount_d: 0,
    sss_cashloan_d: 0,
    sss_calloan_d: 0,
    pagibigc_amount_d: 0,
    pagibig_cloan_d: 0,
    pagibig_hloan_d: 0,
    pagibig_calloan_d: 0,
    philhealthc_amount_d: 0,
    cash_advance_amount_d: 0,
    insurance_d: 0,
    other_d: 0,
    gross_pay: 0,
    tax_amount_d: 0,
    net_pay: 0,
    absent_amount: 0,
    date_deleted: '',
    is_payslip_printed: false,
    pr_cutoff_code: 0,
    emp_no: 0,
    cutoff_summary_code: 0,
}

export type ProcessPayroll = {
    emp_no: number[] | null,
    cutoff_code: number,
    is_disabled_loan: boolean,
    is_ca: boolean,
    is_pagibig_house: boolean,
    is_pagibig_cal: boolean,
    is_pagibig_cash: boolean,
    is_sss_cal: boolean,
    is_sss_cash: boolean,
    is_disabled_deduction: boolean,
    is_30: boolean,
    is_70: boolean,
}


export type HolidayLocationType = 'city' | 'City' | 'province' | 'Province' | 'national' | 'National' | '' | string;

export type HolidayGetType = {
    id?: number,
    holiday_date: string | null,
    holiday_description: string | null,
    holiday_type: string,
    holiday_location: HolidayLocationType,
};


export interface OBTCreateInterface {
    obt_date_filed: string;
    obt_type: string;
    obt_location: string;
    obt_remarks: string;
    obt_date_from: string;
    obt_date_to: string;
    obt_approval_status: string;
    obt_total_hour: number;
    obt_approver1_empno: number | null;
    obt_approver2_empno: number | null,
    emp_no: number;
    cutoff_code: number;
}

export interface OBTViewInterface extends OBTCreateInterface { 
    id: number,
    obt_reason_disapproval: string | null,
    obt_date_approved1: string;
    obt_date_approved2: string | null,
}

export interface OBTEditInterface extends OBTViewInterface {}


export interface OVERTIMECreateInterface {
    ot_date_filed: string;
    ot_type: string;
    ot_remarks: string;
    ot_date_from: string;
    ot_date_to: string;
    ot_approval_status: string;
    ot_reason_disapproval: string | null;
    ot_total_hours: number;
    ot_approver1_empno: number | null;
    ot_approver2_empno: number | null;
    emp_no: number;
    cutoff_code: number;
}

export interface OVERTIMEViewInterface extends OVERTIMECreateInterface { 
    id: number,
    ot_reason_disapproval: string | null,
    ot_date_approved1: string | null;
    ot_date_approved2: string | null;
}

export interface OVERTIMEEditInterface extends OVERTIMEViewInterface {}


export interface LEAVECreateInterface {
    leave_date_filed: string;
    leave_remarks: string;
    leave_date_from: string;
    leave_date_to: string;
    leave_approval_status: string;
    leave_total_hours: number;
    leave_approver1_empno: number | null;
    leave_approver2_empno: number | null;
    leave_number_days: number;
    emp_no: number;
    cutoff_code: number;
    leave_type: number;
}

export interface LEAVEViewInterface extends LEAVECreateInterface { 
    id: number;
    leave_reason_disapproval: string | null;
    leave_date_approved1: string | null;
    leave_date_approved2: string | null;
}

export interface LEAVEEditInterface extends LEAVEViewInterface {}




export interface UACreateInterface {
    ua_date_filed: string;
    ua_description: string;
    ua_date_from: string;
    ua_date_to: string;
    ua_approval_status: string;
    ua_total_hour: number;
    ua_approver1_empno: number | null;
    ua_approver2_empno: number | null;
    emp_no: number;
    cutoff_code: number;
}

export interface UAViewInterface extends UACreateInterface { 
    id: number;
    ua_reason_disapproval: string | null;
    ua_date_approved1: string | null;
    ua_date_approved2: string | null;
}

export interface UAEditInterface extends UAViewInterface {}


// Cases:

// Case 1: Newly Created Leaves: PENDING
// ua_approval_status: "PND"; ** default is Pending ** 
// ua_approver1_empno: number | null; ** auto generated based on emp_profile ** 
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** 
// ua_reason_disapproval: null; ** default is null - meaning newly created ** 
// ua_date_approved1: string | null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **
// ua_date_approved2: string | null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **


// Case 2: Denied Leaves: (if 1 approver)
// ua_approval_status: "PND"; ** default is Pending ** No UI Frontend Edit Access ** Backend will change the status to DSP due to remark **
// ua_approver1_empno: number; ** auto generated based on emp_profile **  No UI Frontend Edit Access **
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** No UI Frontend Edit Access **
// ua_reason_disapproval: string; ** if has remark, meaning, approver 1 denied ** Yes UI Frontend Edit Access **
// ua_date_approved1: string | null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **
// ua_date_approved2: string | null; ** remains null because - NO APPROVER2 ** YES UI Frontend Edit Access **

// Case 3: Denied Leaves: (if 2 approver - approver 1 ignored? approver 2 denied)
// ua_approval_status: "PND"; ** default is Pending ** No UI Frontend Edit Access ** Backend will change the status to DSP due to remark **
// ua_approver1_empno: number; ** auto generated based on emp_profile **  No UI Frontend Edit Access **
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** No UI Frontend Edit Access **
// ua_reason_disapproval: string; ** if has remark, meaning, approver 1 ignored but approver 2 denied** Yes UI Frontend Edit Access **
// ua_date_approved1: string | null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **
// ua_date_approved2: string | null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **

// Case 4: Denied Leaves: (if 2 approver - approver 1 denied? approver 2 not necessary?)
// ua_approval_status: "PND"; ** default is Pending ** No UI Frontend Edit Access ** Backend will change the status to DSP due to remark **
// ua_approver1_empno: number; ** auto generated based on emp_profile **  No UI Frontend Edit Access **
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** No UI Frontend Edit Access **
// ua_reason_disapproval: string; ** if has remark, meaning, approver 1 denied and approver 2 dont need to change** Yes UI Frontend Edit Access **
// ua_date_approved1: null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **
// ua_date_approved2: null; ** remains null because - denied(IF HAS REMARK)/(OTHERWISE)pending ** YES UI Frontend Edit Access **

// Case 5: Approved Leaves: (if 2 approver - approver 1 approved? approver 2 approved?)
// ua_approval_status: "PND"; ** default is Pending ** No UI Frontend Edit Access ** Backend will change the status to APD due to remark **
// ua_approver1_empno: number; ** auto generated based on emp_profile **  No UI Frontend Edit Access **
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** No UI Frontend Edit Access **
// ua_reason_disapproval: string | null; ** if NULL remark, meaning, approver 1 APPROVED and approver 2 ALSO APPROVED** Yes UI Frontend Edit Access **
// ua_date_approved1: string | null; ** if has STRING - Meaning approver1 APPROVED ** YES UI Frontend Edit Access **
// ua_date_approved2: string | null; ** if has STRING - Meaning approver2 APPROVED ** YES UI Frontend Edit Access **

// Case 6: Pending Leaves: (if 2 approver - approver 1 approved? approver 2 Pending?)
// ua_approval_status: "PND"; ** default is Pending ** No UI Frontend Edit Access ** Backend will change the status to APD due to remark **
// ua_approver1_empno: number; ** auto generated based on emp_profile **  No UI Frontend Edit Access **
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** No UI Frontend Edit Access **
// ua_reason_disapproval: string; ** if Null remark, meaning, approver 1 APPROVED and approver 2 is PENDING** Yes UI Frontend Edit Access **
// ua_date_approved1: string | null; ** if has STRING - Meaning approver1 APPROVEDE ** YES UI Frontend Edit Access **
// ua_date_approved2: string | null; ** remains null because - approver2 denied(if has remarks)/(otherwise)pending ** YES UI Frontend Edit Access **

// Case 7: Approved Leaves: (if 1 approver - approver 1 approved?)
// ua_approval_status: "PND"; ** default is Pending ** No UI Frontend Edit Access ** Backend will change the status to APD due to remark **
// ua_approver1_empno: number; ** auto generated based on emp_profile **  No UI Frontend Edit Access **
// ua_approver2_empno: number | null; ** auto generated based on emp_profile ** No UI Frontend Edit Access **
// ua_reason_disapproval: string; ** if NULL remark, meaning, approver 1 APPROVED and approver 2 is NULL** Yes UI Frontend Edit Access **
// ua_date_approved1: string | null; ** if has STRING - Meaning approver1 APPROVED ** YES UI Frontend Edit Access **
// ua_date_approved2: string | null; ** remains null because - NO APPROVER2 ** YES UI Frontend Edit Access **